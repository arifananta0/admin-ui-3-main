import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../Elements/Card";
import { Icon } from "../../Elements/Icon";
import CompositionExample from "../../Elements/GaugeChart";

const EditGoalsPopup = ({ isOpen, onClose, goals, updateGoals }) => {
  const [presentAmount, setPresentAmount] = useState(goals.presentAmount);
  const [targetAmount, setTargetAmount] = useState(goals.targetAmount);

  const handleSave = () => {
    updateGoals({ presentAmount, targetAmount });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md shadow-md w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Edit Goals</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-xl font-bold"
          >
            &times;
          </button>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Present Amount</label>
          <input
            type="number"
            value={presentAmount}
            onChange={(e) => setPresentAmount(Number(e.target.value))}
            className="w-full border rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Target Amount</label>
          <input
            type="number"
            value={targetAmount}
            onChange={(e) => setTargetAmount(Number(e.target.value))}
            className="w-full border rounded-md p-2"
          />
        </div>
        <button
          onClick={handleSave}
          className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark"
        >
          Save
        </button>
      </div>
    </div>
  );
};

const CardGoal = () => {
  const [goals, setGoals] = useState({ presentAmount: 1000, targetAmount: 2000 });
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const value = (goals.presentAmount * 100) / goals.targetAmount;

  const getGoals = async () => {
    setIsLoading(true);
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      const response = await axios.get("https://jwt-auth-eight-neon.vercel.app/goals", {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      });
      setGoals({
        presentAmount: response.data.data[0].present_amount,
        targetAmount: response.data.data[0].target_amount,
      });
    } catch (error) {
      console.error("Error fetching goals:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateGoals = async (updatedGoals) => {
    setIsLoading(true);
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      await axios.put("https://jwt-auth-eight-neon.vercel.app/goals", updatedGoals, {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      });
      setGoals(updatedGoals);
    } catch (error) {
      console.error("Error updating goals:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getGoals();
  }, []);

  return (
    <Card title="Goals">
      <div className="h-full flex flex-col justify-between">
        <div className="flex justify-between">
          <div className="flex">
            <span className="text-2xl font-bold me-4 self-center">
              ${goals.presentAmount}
            </span>
            <div
              className="p-2 bg-gray-05 rounded-md box-border cursor-pointer"
              onClick={() => setIsPopupOpen(true)}
            >
              <Icon.Edit />
            </div>
          </div>
          <div>Nov, 2023</div>
        </div>
        <div className="border-b-2 my-4"></div>
        <div className="flex justify-between">
          <div>
            <div className="flex mt-3 mb-10">
              <div>
                <Icon.Award />
              </div>
              <div className="ms-2">
                <span className="text-gray-02">Target Achieved</span>
                <br />
                <span className="font-bold text-xl">${goals.targetAmount}</span>
              </div>
            </div>
            <div className="flex">
              <div>
                <Icon.Target />
              </div>
              <div className="ms-2">
                <span className="text-gray-02">This Month Target</span>
                <br />
                <span className="font-bold text-xl">${goals.presentAmount}</span>
              </div>
            </div>
          </div>
          <div className="ms-4 text-center">
            <CompositionExample desc={value} />
            <div className="flex justify-between mt-4">
              <span className="text-gray-03">$0</span>
              <span className="font-bold text-2xl">${goals.presentAmount}</span>
              <span className="text-gray-03">${goals.targetAmount}</span>
            </div>
            <div className="mt-2">Target vs Achievement</div>
          </div>
        </div>
      </div>
      <EditGoalsPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        goals={goals}
        updateGoals={updateGoals}
      />
    </Card>
  );
};

export default CardGoal;
