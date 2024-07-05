
import React, { useState } from 'react';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import FindIdModal from './FindIdModal';
import FindPwModal from './FindPwModal';
import GenreModal from './GenreModal'

const Header: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isSignupModalOpen, setSignupModalOpen] = useState(false);
		const [isFindIdModalOpen, setFindIdModalOpen] = useState(false); 
		const [isFindPwModalOpen, setFindPwModalOpen] = useState(false);
		const [isGenreModalOpen, setGenreModalOpen] = useState(false);

   const openModal = () => {
        setModalOpen(true);
    };

   const closeModal = () => {
        setModalOpen(false);
    };

   const openSignupModal = () => {
        setSignupModalOpen(true);
    };

   const closeSignupModal = () => {
        setSignupModalOpen(false);
    };

	const openFindIdModal = () => {
			setFindIdModalOpen(true);
	};

	const closeFindIdModal = () => {
			setFindIdModalOpen(false);
	};

	const openFindPwModal = () => {
		setFindPwModalOpen(true);
};

const closeFindPwModal = () => {
		setFindPwModalOpen(false);
};

const openGenreModal = () => {
	setGenreModalOpen(true);
};

const closeGenreModal = () => {
	setGenreModalOpen(false);
};

  const handleSignup = () => {
      closeModal();  // 로그인 모달 닫기
      openSignupModal();  // 회원가입 모달 열기
				
  };

	const handleFindId = () => {
		closeModal();  // 로그인 모달 닫기
		openFindIdModal();  // 아이디 찾기 모달 열기
	};

	const handleFindPw = () => {
		closeModal();  // 로그인 모달 닫기
		openFindPwModal();  // 비밀번호 찾기 모달 열기
	};

	const handleSignupComplete = () => {
		closeModal(); // 회원가입 모달 닫기
		openGenreModal(); // 장르 선택 모달 열기
};



    return (
        <div className="home">
            <header className="header">
                <h1>Music-Hub</h1>
                <div className="auth-buttons">
                    <button onClick={openModal}>로그인</button>
                    <button onClick={openSignupModal}>회원가입</button>
                </div>
            </header>
            {/* Other parts of the Home component */}
            
						{isModalOpen && <LoginModal onClose={closeModal} onSignup={handleSignup} onFindId={handleFindId} 
						onFindPw={handleFindPw} />} 
            {isSignupModalOpen && <SignupModal onClose={closeSignupModal} onSignupComplete={handleSignupComplete} />}
            {isFindIdModalOpen && <FindIdModal onClose={closeFindIdModal} />}
						{isFindPwModalOpen && <FindPwModal onClose={closeFindPwModal} />}
						<GenreModal isOpen={isGenreModalOpen} onClose={closeGenreModal} />
        </div>
    );
};

export default Header;
