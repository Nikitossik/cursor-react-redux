import React, { useEffect } from 'react';
import './Post.css';
import { useState } from 'react';

import approvedUser from '../assets/approved-signal.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const Post = (props) => {

    const [liked, setLiked] = useState(false);
    const [currentLikes, setCurrentLikes] = useState(props.likes);

    useEffect(() => {
        setCurrentLikes(liked ? currentLikes + 1 : props.likes);
    }, [liked]);

    return (
        <div className='post'>
            <div className='post__avatar'>
                <img className='post__avatar-image' src={props.photo} alt='author-avatar' />
            </div>
            <div className='post__inner'>
                <div className='post__header'>
                    <div className='post__info'>
                        <span className='author-name'>
                            {props.name}
                            <img className='svg-icon approved' src={approvedUser} alt='approved' />
                        </span>
                        <span className='author-nickname'>{props.nickname}</span>
                        <span className='post__date'>{props.date}</span>
                    </div>
                    <button className='post__button'>
                        <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
                    </button>
                </div>
                <div className='post__body'>
                    <p className='post__text'>{props.content}</p>
                    <img className='post__image' alt='post-img' src={props.image} />
                </div>
                <div className='post__footer'>
                    <div className='post__column-4'>
                        <button className='post__button'>
                            <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
                        </button>
                        <span className='action-info'>{props.comments}</span>
                    </div>
                    <div className='post__column-4'>
                        <button className='post__button'>
                            <FontAwesomeIcon icon={faRetweet}></FontAwesomeIcon>
                        </button>
                        <span className='action-info'>{props.retweets}</span>
                    </div>
                    <div className='post__column-4'>
                        <button onClick={() => setLiked(!liked)} className={`post__button ${liked ? 'post__button--active' : ''}`}>
                            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                        </button>
                        <span className={`action-info ${liked ? 'action-info--active' : ''}`}>{currentLikes}</span>
                    </div>
                    <div className='post__column-4'>
                        <button className='post__button'>
                            <FontAwesomeIcon icon={faUpload}></FontAwesomeIcon>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;