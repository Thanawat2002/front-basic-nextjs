"use client";

import { IUser } from "@/types/IUser";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

type Props = {};

function Page({}: Props) {
	const [data, setData] = useState<IUser[]>([]);
	const getData = async () => {
		const res = await axios.get<IUser[]>(
			`https://663489e39bb0df2359a1d06e.mockapi.io/api/v1/users`
		);
		setData(res.data);
		console.log(res.data);
	};

	useEffect(() => {
		getData();
		return () => {};
	}, []);

	return (
		<>
			<h1>Users</h1>
			<Table>
				<TableCaption>Users List</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHeader>First Name</TableHeader>
						<TableHeader>Last Name</TableHeader>
						<TableHeader>Email</TableHeader>
						<TableHeader>Phone Number</TableHeader>
						<TableHeader>Actions</TableHeader>
					</TableRow>
				</TableHeader>
				<TableBody>
					{data.map((user) => (
						<TableRow key={user.id}>
							<TableCell>{user.first_name}</TableCell>
							<TableCell>{user.last_name}</TableCell>
							<TableCell>{user.email}</TableCell>
							<TableCell>{user.phone_number}</TableCell>
							<TableCell>
								<Link href={`/${user.id}`}>
									<button>Details</button>
								</Link>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
				<TableFooter>
					<TableRow>
						<TableCell colSpan={5}>Total Users: {data.length}</TableCell>
					</TableRow>
				</TableFooter>
			</Table>
		</>
	);
}

export default Page;
