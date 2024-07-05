import React, { useState } from 'react';
import '../styles/SignupModal.css';

interface SignupModalProps {
    onClose: () => void;
		onSignupComplete?: () => void; // 회원가입 완료 후 처리
}

const SignupModal: React.FC<SignupModalProps> = ({ onClose, onSignupComplete }) => {

		const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [nickname, setNickname] = useState('');
    const [birthdate, setBirthdate] = useState('');

		const PhoneNumber_List = ['010', '011', '016', '018', '019'];

		const Birthday_Year_List = Array.from(
			{ length: 120 },
			(_, i) => `${i + 1900}`,
		);
		const Birthday_Month_List = Array.from({ length: 12 }, (_, i) => `${i + 1}`);
		const Birthday_Day_List = Array.from({ length: 31 }, (_, i) => `${i + 1}`);

		const handleSubmit = (e: React.FormEvent) => {
			e.preventDefault();
			
			if (!email || !password || !confirmPassword || !phone) {
					alert('필수 항목을 모두 입력해주세요.');
					return;
			}

			if (password !== confirmPassword) {
				alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
				return;
		}

			// 여기서 추가적인 검증 및 폼 제출 처리를 할 수 있습니다.
			console.log({
					email,
					password,
					confirmPassword,
					phone,
					nickname,
					birthdate
			});

			if (onSignupComplete) {
				onSignupComplete();
		}

			// 폼 제출 후 모달을 닫을 수 있습니다.
			onClose();
	};

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>X</button>
                <div className="signup-form">
                    <h2>회원가입</h2>
                    <form>
												<h4>필수 항목</h4>
                        <label>
                            <input type="text" name="email" value={email} placeholder='이메일'
                                onChange={(e) => setEmail(e.target.value)}/>
                        </label>
                        <label>
                           
                            <input type="password" name="password" value={password} placeholder='비밀번호'
                                onChange={(e) => setPassword(e.target.value)}/>
                        </label>
                        <label>
        
                            <input type="password" name="confirmPassword" value={confirmPassword} placeholder='비밀번호 확인'
                                onChange={(e) => setConfirmPassword(e.target.value)} />
                        </label>
                        <label>
													<select className="numberBox">
                						{PhoneNumber_List.map((number, index) => 
														(
                 						 	<option key={index}>{number}</option>
                						))}
              						</select>

                        <input type="tel" name="phone" value={phone} placeholder='전화번호'
                                onChange={(e) => setPhone(e.target.value)} />
                        </label>

												<h4>선택 항목</h4>
                        <label>
                            <input type="text" name="nickname" value={nickname} placeholder='닉네임'
                                onChange={(e) => setNickname(e.target.value)} />
                        </label>

                        <label>
                          
												<p>생년월일:</p>
												<select className="birthdayBox yearBox"> 
													<option value=""></option>
               						 {Birthday_Year_List.map((year, index) => 
												 (
               					   <option key={index}>{year}</option>
               					 ))}
              					</select>
              					<select className="birthdayBox monthBox">
												<option value=""></option>
                					{Birthday_Month_List.map((month, index) => 
												 (
                				  <option key={index}>{month}</option>
                				 ))}
              				</select>
             				 <select className="birthdayBox dayBox">
											<option value=""></option>
                			{Birthday_Day_List.map((day, index) => 
										  	(
                 				 <option key={index}>{day}</option>
                				))}
             				 </select>
                        </label>

                        <button type="submit" onClick={handleSubmit}>가입</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignupModal;

