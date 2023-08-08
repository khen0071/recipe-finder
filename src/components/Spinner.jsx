import { Rings } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="spinner_container">
      <Rings
        height="180"
        width="180"
        color="#754c00"
        radius="6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
      />

      <h2 className="text-darkOrange text-[18px] font-bold">Loading</h2>
      <p className="text-darkOrange text-[14px]">Please Wait</p>
    </div>
  );
};

export default Spinner;
