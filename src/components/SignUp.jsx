import { TextField, styled } from "@mui/material";

const INPUT_ARRAY = [
	{
		name: "firstName",
		label: "Имя",
	},
	{
		name: "lastName",
		label: "Фамилия",
		type: "text",
	},
	{
		name: "phoneNumber",
		label: "Номер телефона",
		type: "tel",
	},
	{
		name: "email",
		label: "Email",
		type: "email",
	},
	{
		name: "password",
		label: "Пароль",
		type: "password",
	},
];

const SignUp = () => {
	return (
		<div>
			<FormContainer>
				{INPUT_ARRAY.map((item) => (
					<TextField
						placeholder={item.label}
						label={item.label}
						key={item.name}
						type={item.name}
					/>
				))}
			</FormContainer>
		</div>
	);
};

export default SignUp;

const FormContainer = styled("form")(() => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	gap: "20px",
	border: "1px solid",
	width: "fit-content",
	padding: "30px",
	margin: "0 auto",
	borderRadius: "8px",
}));
