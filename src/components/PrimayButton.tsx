function PrimaryButton({text, action, disabled = false}: {text: string, action: () => void, disabled?: boolean}) {
  return (
    <button
      className="col fluid align-content"
      type="button"
      onClick={action}
      disabled={disabled}

      style={{
        width:"300px"
      }}
    >
      {text}
    </button>
  );
} export default PrimaryButton;
