function FallbackUI({ error, resetErrorBoundary }) {
    return (
        <div>
            <p>{error.message}</p>
            <button onClick={resetErrorBoundary}>Try Again</button>
        </div>
    );
};

export default FallbackUI;