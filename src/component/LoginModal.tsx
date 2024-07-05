import React, { useState } from 'react';
import '../styles/LoginModal.css';

interface LoginModalProps {
    onClose: () => void;
		onSignup: () => void;
		onFindId: () => void;  
		onFindPw: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose, onSignup, onFindId, onFindPw }) => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		
		if (!email && !password) {
				alert('아이디와 비밀번호를 입력하세요.');
				return;
		}
	

	
	}

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>X</button>
                <div className="login-form">
                    <h2>로그인</h2>
                    <form>
                        <label>
                            <input type="text" name="id" placeholder='아이디 (이메일)' />
                        </label>
                        <label>
                            <input type="password" name="password" placeholder='비밀번호'/>
                        </label>
                        <label>
                            <input type="checkbox" name="remember" />
                            <span>로그인 유지</span>
                        </label>
                        <div className="login-help">
                            <button type="button" onClick={onFindId}>아이디 찾기</button>
                            <button type="button" onClick={onFindPw}>비밀번호 찾기</button>
                            <button type="button" onClick={onSignup}>회원가입</button>
                        </div>
                      
                        <button type="submit" onClick={handleSubmit}>로그인</button>
                    </form>
                   
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
