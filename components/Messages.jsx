"use client";
import { useEffect, useState } from "react";
import Spinner from "@/components/Spinner";
import Message from "@/components/Message";
import { toast } from "react-toastify";

const Messages = () => {
	const [messages, setMessages] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getMessages = async () => {
			try {
				const res = await fetch(`/api/messages`);
				if (res.status === 200) {
					const data = await res.json();
					setMessages(data);
				}
			} catch (error) {
				console.log(error);
				toast.error("Error fetching messages!");
			} finally {
				setLoading(false);
			}
		};

		getMessages();
	}, []);

	return loading ? (
		<Spinner loading={loading} />
	) : (
		<section class='bg-blue-50'>
			<div class='container m-auto py-24 max-w-6xl'>
				<div class='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
					<h1 class='text-3xl font-bold mb-4'>Your Messages</h1>
					<div className='space-y-4'>
						{messages.length === 0 ? (
							<p>No messages</p>
						) : (
							messages.map((message) => (
								<Message
									key={message._id}
									message={message}
								/>
							))
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Messages;
