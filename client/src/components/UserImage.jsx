import { Box } from '@mui/material';

export const UserImage = ({ image, size = '60px' }) => {
	return (
		<Box width={size} height={size}>
			<img
				style={{ objectFit: 'cover', borderRadius: '50%' }}
				height={size}
				width={size}
				src={`http://localhost:3001/assets/${image}`}
				alt={'user'}
			/>
		</Box>
	);
};
