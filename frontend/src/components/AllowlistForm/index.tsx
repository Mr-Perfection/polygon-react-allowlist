import React, { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Allowlist as AllowlistContract } from '../../../../backend/typechain-types/Allowlist';

export default function AllowlistForm({ contract, accounts }: { contract: AllowlistContract | undefined, accounts: string[]}) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    register("firstName", { required: true });
    register("lastName", { required: true });
    register("walletAddress", { required: true });
  }, [register]);

  async function submitForm(data: FieldValues) {
    const uuid = crypto.randomUUID();
    try {
      contract?._createAllowlister(uuid, { from: accounts[0] });
    } catch(e) {
      console.error(e);
    }
  }

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit((data) => submitForm(data))}>
        <div className="header">
          <h1>Allowlist Form</h1>
          <p>
            Please fill out this form to get allowlisted for this exclusive
            project.
          </p>
        </div>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          onChange={(e) => setValue("firstName", e.target.value)}
        />
        {errors.firstName && (
          <span role="alert" className="errorField">
            First name is required.
          </span>
        )}
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          onChange={(e) => setValue("lastName", e.target.value)}
        />
        {errors.lastName && (
          <span role="alert" className="errorField">
            Last name is required.
          </span>
        )}
        <label htmlFor="walletAddress">Wallet Address</label>
        <input
          id="walletAddress"
          onChange={(e) => setValue("walletAddress", e.target.value)}
        />
        {errors.walletAddress && (
          <span role="alert" className="errorField">
            Wallet address is required.
          </span>
        )}
        <input type="submit" className="submitButton" />
      </form>
    </div>
  );
}