import { useEffect } from 'react';

interface MessageProps {
    text: string;
    onClose: () => void;
    duration?: number;
}

export default function Message({ text, onClose, duration = 9000 }: MessageProps) {
    useEffect(() => {
        if (!text) return;
        const timer = setTimeout(() => {
            onClose();
        }, duration);
        return () => clearTimeout(timer);

    }, [text, duration, onClose]);

    if (!text) return null;

    return (
        <aside className="message-aside">
            <div className="message-container">
                <div className="message-content">
                    {text}
                </div>
                <button className="message-close" onClick={onClose}>
                    x
                </button>
            </div>
        </aside>
    );
}
