import React from 'react';
import '../styles/FindIdModal.css';

interface FindIdModalProps {
    onClose: () => void;
}

const FindIdModal: React.FC<FindIdModalProps> = ({ onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>X</button>
                <div className="find-id-form">
                    <h2>아이디 찾기</h2>
                    <form>
                        <div className="input-group">
                            <label>
                                <span>전화번호:</span>
                                <input type="text" name="phone" />
                            </label>
                        </div>
                        <div className="input-group">
                            <label>
                                <span>생년월일:</span>
                                <input type="text" name="birthdate" />
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
