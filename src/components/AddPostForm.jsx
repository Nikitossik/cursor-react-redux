import './AddPostForm.css';
import authors from '../redux/autorsData';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function AddPostForm(){

    const defaultPostText = 'Get started with Redux';
    const defaultPostImage = 'https://habrastorage.org/webt/gm/ww/nq/gmwwnqmma6rdwtf3ofir3fjrcmy.gif';
    const defaultAuthor = authors['@ZelenskyyUa'];

    const [postText, setPostText] = useState(defaultPostText);
    const [postImage, setPostImage] = useState(defaultPostImage);
    const [postAuthor, setPostAuthor] = useState(defaultAuthor);
    
    const dispatch = useDispatch();

    const handleInput = e => {
        const {name, value} = e.target;
        switch (name){
            case 'post-text': 
                setPostText(value);
                break;
            case 'post-image': 
            setPostImage(value);
                break;
            case 'post-author': 
            setPostAuthor(authors[value]);
                break;
            default: 
                break;
        }
    }

    const handleClick = e => {
        e.preventDefault();
        dispatch(dispatchAction);
    }

    const dispatchAction = {
        type: 'add-post',
        payload: {
            content: postText, 
            image: postImage,
            ...postAuthor
        }
    };


    return (
        <form className='add-post-form'>
            <h2 className='form-title'>Add post: </h2>
            <div className='form-group'>
                <label className='form-label' htmlFor='post-text'>What do you think? Write it down</label>
                <textarea name='post-text' onInput={handleInput} value={postText} rows="1" id='post-text' placeholder='Write there...' className='form-input form-textarea'></textarea>
            </div>
            <div className='form-group'>
                <label className='form-label' htmlFor='post-image'>URL for image</label>
                <input name='post-image' onInput={handleInput} value={postImage} type='text' id='post-image' placeholder='URL...' className='form-input'/>
            </div>
            <div className='form-group'>
                <label className='form-label' htmlFor='post-image'>Select author</label>
                <select name='post-author' onInput={handleInput} value={postAuthor} className='form-input form-select'>
                    <option value="@ZelenskyyUa" className='form-option'>
                        @ZelenskyyUa
                    </option>
                    <option value="@dart_vader" className='form-option'>
                        @dart_vader
                    </option>
                </select>
            </div>
            <button className='form-btn' onClick={handleClick}>Add post</button>
        </form>
    );
}

export default AddPostForm;