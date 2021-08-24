import author1 from '../assets/post1/author-photo.jpg';
import post1 from '../assets/post1/post-image.jpg';

import author2 from '../assets/post2/author-photo.jpg';
import post2 from '../assets/post2/post-image.jpg';

const counter = function () {
    let counter = 0;
    return function () {
        return counter++;
    }
}

const idCounter = counter();

const initialState = {
    posts: [
        {
            id: idCounter(),
            name: "Anakin Skywalker",
            photo: author1,
            nickname: "@dart_vader",
            content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
            image: post1,
            date: "Feb 26",
            comments: 482,
            retweets: 146,
            likes: 887
        },
        {
            id: idCounter(),
            name: "Володимир Зеленський",
            photo: author2,
            nickname: "@ZelenskyyUa",
            content: "Іще одна медаль від Flag of Ukraine спортсменів на Олімпіаді @Tokyo2020! Олена Костевич та Олег Омельчук посіли третє місце у стрільбі з пневматичного пістолета! Вітаю бронзових призерів, бажаю вам наснаги та нових перемог!",
            image: post2,
            date: "Jul 27",
            comments: 123,
            retweets: 74,
            likes: 624
        }
    ]
};

export default function rootReducer(state = initialState, action) {

    switch (action.type) {
        case 'add-post':
            return {
                ...state,
                posts: [
                    {
                        ...action.payload,
                        date: `${Date().toString().slice(4, 10)}`,
                        comments: 0,
                        retweets: 0,
                        likes: 0,
                        id: idCounter(),
                    },
                    ...state.posts
                ],
            }
        default:
            return state
    }
}