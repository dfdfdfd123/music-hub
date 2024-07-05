import React from 'react';
import '../styles/FindPwModal.css';

interface FindIdModalProps {
    onClose: () => void;
}

const FindIdModal: React.FC<FindIdModalProps> = ({ onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>X</button>
                <div className="find-pw-form">
                    <h2>비밀번호 찾기</h2>
                    <form>
                        <div className="input-group">
                            <label>
                                <span>아이디:</span>
                                <input type="text" name="id" />
                            </label>
                        </div>
                        <div className="input-group">
                            <label>
                                <span>전화번호:</span>
                                <input type="text" name="phone" />
                            </label>
                            <button type="submit">찾기</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FindIdModal;
