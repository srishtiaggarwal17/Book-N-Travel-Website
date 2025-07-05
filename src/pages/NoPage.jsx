const NoPage = () => {
  return (
    <>
      <style>
        {`
          .error-wrap {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f3f4f6;
          }

          .err-card {
            background-color: white;
            padding: 2rem;
            border-radius: 0.5rem;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            text-align: center;
            max-width: 500px;
            width: 90%;
          }

          .error-message {
            font-size: 1.75rem;
            color: #dc2626;
            margin-bottom: 1rem;
            font-weight: bold;
          }

          .error-description-1 {
            color: #374151;
            margin-bottom: 0.5rem;
            font-size: 1.1rem;
          }

          .error-description-2 {
            color: #6b7280;
            margin-bottom: 1.5rem;
          }

          #err-btn {
            background-color: #2563eb;
            padding: 0.5rem 1.25rem;
            border-radius: 0.375rem;
            transition: background-color 0.3s ease;
            border: none;
          }

          #err-btn:hover {
            background-color: #1d4ed8;
          }

          .return-button {
            text-decoration: none;
            color: white;
            font-weight: 500;
          }
        `}
      </style>

      <div className="error-wrap">
        <div className="err-card">
          <div className="error-message">404 - Page Not Found</div>
          <div className="error-description-1">
            The page you are looking for doesn't exist.
          </div>
          <div className="error-description-2">
            It might have been moved or deleted.
          </div>
          <button id="err-btn" aria-label="error-btn">
            <a href="/" className="return-button">
              Return to Home Page
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default NoPage;

