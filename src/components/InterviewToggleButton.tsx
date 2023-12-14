import React from 'react'
import { Button, Image, Tooltip } from '@chakra-ui/react'
// import { ChatIcon, CloseIcon } from '@chakra-ui/icons'
// import avatar from '../images/avatar.png'
import avatar_gif from '../images/avatar_gif.gif'
import { FiX } from 'react-icons/fi'

interface InterviewToggleButtonProps {
	onClick: () => void
	showInterview: boolean
}

const InterviewToggleButton: React.FC<InterviewToggleButtonProps> = ({
	onClick,
	showInterview,
}) => {
	return (
		<Tooltip hasArrow label={showInterview ? 'Hide Interview' : 'Show Interview'} placement="left">
			<Button
				aria-label="Toggle Interview"
				size={'lg'}
				// fontSize={'25px'}
				// icon={showInterview ? <CloseIcon /> : <ChatIcon />}
				colorScheme="facebook"
				// isRound={true}
				borderRadius={'50%'}
				width="fit-content"
				position="absolute"
				right={'20px'}
				bottom={'20px'}
				h={'80px'}
				w={'80px'}
				padding={0}
				onClick={onClick}
				justifyContent={'center'}
				alignItems={'center'}
				zIndex={1}
			>
				{showInterview ? (
					// <Image h={'80px'} src={<FiX />} borderRadius={'50%'} />
					<FiX size={'60px'} />
				) : (
					<Image h={'80px'} src={avatar_gif} borderRadius={'50%'} />
				)}
			</Button>
		</Tooltip>
	)
}

export default InterviewToggleButton
