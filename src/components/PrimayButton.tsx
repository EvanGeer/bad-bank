function PrimaryButton({text, action, disabled = false, testid}: {text: string | JSX.Element, action: () => void, disabled?: boolean, testid?:string}) {
  return (
    <button
      data-testid={testid ?? text}
      className="col fluid align-content"
      type="button"
      onClick={action}
      disabled={disabled}
    >
      {text}
    </button>
  );
} export default PrimaryButton;
