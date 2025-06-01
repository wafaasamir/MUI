import React, { useState } from "react";
import {
	Box,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Typography,
} from "@mui/material";

const LanguageSelectForm = () => {
	const [selectedLanguage, setSelectedLanguage] = useState("");

	const handleChange = (event) => {
		setSelectedLanguage(event.target.value);
	};

	return (
		<Box
			sx={{
				maxWidth: 400,
				mx: "auto",
				mt: 5,
				p: 3,
				boxShadow: 3,
				borderRadius: 2,
				bgcolor: "background.paper",
			}}
		>
			<Typography
				variant="h6"
				sx={{ mb: 3, textAlign: "center", fontWeight: "bold" }}
			>
				Select Form
			</Typography>

			<FormControl fullWidth sx={{ mb: 3 }}>
				<InputLabel id="language-select-label">Choose Language</InputLabel>
				<Select
					labelId="language-select-label"
					label="Choose Language"
					value={selectedLanguage}
					onChange={handleChange}
				>
					<MenuItem value="en">English</MenuItem>
					<MenuItem value="ar">Arabic</MenuItem>
					<MenuItem value="fr">French</MenuItem>
				</Select>
			</FormControl>

			<Button fullWidth variant="contained" size="large" sx={{ mb: 3 }}>
				SUBMIT
			</Button>

			<Typography variant="body1" sx={{ mt: 2 }}>
				Selected:{" "}
				{selectedLanguage && (
					<Box component="span" sx={{ fontWeight: "bold" }}>
						{selectedLanguage}
					</Box>
				)}
			</Typography>
		</Box>
	);
};

export default LanguageSelectForm;
