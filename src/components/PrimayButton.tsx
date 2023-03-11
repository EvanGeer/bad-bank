function PrimaryButton({text, action, disabled = false, testid}: {text: string, action: () => void, disabled?: boolean, testid?:string}) {
  return (
    <button
      data-testid={testid ?? text}
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
