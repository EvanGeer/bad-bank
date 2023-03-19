import logo from "../logo.svg";
import fb from "../firebaseLogo.png";

export function FireReactBankBrand({className=""} : {className?: string}) {
  return (
    <div className={`${className} d-flex align-self-center`}>
      <h1 className="text-primary align-self-center text-warning ps-2">
        f
        <img src={fb} style={{ height: "30px" }} />
        <u>re</u>
      </h1>
      <h1 className="text-primary align-self-center">
        <img src={logo} style={{ height: "45px", margin: "-12px" }} />
        ct
      </h1>
      <h1 className="text-light align-self-center">Bank</h1>
    </div>
  );
}
