function AlertPopup({ alert, onClose }) {

  if (!alert) return null;

  return (
    <div className="fixed top-6 right-6 z-50">

      <div className="bg-red-600 text-white p-6 rounded-2xl shadow-2xl w-80 animate-bounce">

        <h3 className="text-xl font-bold mb-2">
          🚨 FIRE ALERT
        </h3>

        <p className="text-sm">
          {alert.message}
        </p>

        <button
          onClick={onClose}
          className="mt-4 bg-white text-red-600 px-4 py-2 rounded-lg font-semibold"
        >
          Dismiss
        </button>

      </div>

    </div>
  );
}

export default AlertPopup;