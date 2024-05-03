"use client";

import { IUser } from "@/types/IUser";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Props = {};

function Page({}: Props) {
	const router = useRouter();
	const [firstName, setFirstName] = useState<string>("");
	const [lastName, setLastName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [phoneNumber, setPhoneNumber] = useState<string>("");

	const handleAdd = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const data: IUser = {
			first_name: firstName,
			last_name: lastName,
			email: email,
			phone_number: phoneNumber,
		};

		const res = await axios.post(
			`https://663489e39bb0df2359a1d06e.mockapi.io/api/v1/users`,
			data
		);
		if (res.status === 201) {
			alert("User added successfully");
			router.push("/");
		} else {
			alert("User not added");
		}
	};

	return (
		<>
			<h1>Add User</h1>
			<form>
				<label>First name :</label>
				<input
					type="text"
					name="firstName"
					required
					onChange={(e) => {
						setFirstName(e.target.value);
					}}
					value={firstName}
				/>
				<br />
				<label>Last name :</label>
				<input
					type="text"
					name="lastName"
					required
					onChange={(e) => {
						setLastName(e.target.value);
					}}
					value={lastName}
				/>
				<br />
				<label>Email :</label>
				<input
					type="email"
					name="email"
					required
					onChange={(e) => {
						setEmail(e.target.value);
					}}
					value={email}
				/>
				<br />
				<label>Phone number :</label>
				<input
					type="text"
					name="phoneNumber"
					required
					onChange={(e) => {
						setPhoneNumber(e.target.value);
					}}
					value={phoneNumber}
				/>
				<br />
				<button type="submit" onClick={handleAdd}>
					Submit
				</button>
			</form>
		</>
	);
}

export default Page;
