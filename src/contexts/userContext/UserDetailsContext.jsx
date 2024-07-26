import React, { useState } from 'react';
export const UserDetailsContext = React.createContext({});

export const UserDetailsContextConsumer = UserDetailsContext.Consumer;

export const UserDetailsContextProvider = (props) => {
	

	const [userDetails, setUserDetails] = useState(null);

	return (
		<UserDetailsContext.Provider
			value={{
				userDetails,
				setUserDetails
			}}
		>
			{props.children}
		</UserDetailsContext.Provider>
	);
};
