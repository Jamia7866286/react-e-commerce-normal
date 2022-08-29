import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { validatePhoneNumberViaAPI } from "../../API/phone-verification";
import { AddressData, TotalPrice } from "../../assets/atoms/main.recoil";
import AmountDetailsCard from "../Amount-Details-Card/amount-details-card";

const MyAddress = () => {
  const [addressText, setAddressText] = useRecoilState(AddressData);

  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            value={addressText.address}
            readOnly
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            value={addressText.phone}
            readOnly
          />
        </div>

        <button
          type="button"
          className="btn btn-primary btn-md w-100"
          onClick={() => {
            validatePhoneNumberViaAPI(addressText.phone);
          }}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default MyAddress;
