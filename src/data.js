const appData = {
    tournamentsData: [
        {
            id: 0,
            image: 'https://images.unsplash.com/photo-1545381954-057259f406d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2551&q=80',
            title: 'Cold Wave',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },{
            id: 1,
            image: 'https://images.unsplash.com/photo-1545426682-756e29429c4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
            title: 'The Luscious Boyfriend',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },{
            id: 2,
            image: 'https://images.unsplash.com/photo-1545398865-0062dafeb74d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2602&q=80',
            title: 'Heart of Husband',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed velit quis nunc volutpat dignissim sed quis nisl.'
        },{
            id: 3,
            image: 'https://images.unsplash.com/photo-1545341125-32e556d749f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
            title: 'The Birch\'s Servants',
            description: 'Aliquam massa augue, eleifend nec metus non, gravida tristique tortor. Fusce at nisl accumsan, sodales nisi non, pellentesque tellus.'
        },{
            id: 4,
            image: 'https://images.unsplash.com/photo-1545419629-7e9bf4ef8d77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
            title: 'The Academy of the Weeping',
            description: 'Donec luctus placerat diam, sed condimentum nunc venenatis a. Fusce auctor consequat turpis. Nulla vel erat at turpis sollicitudin consectetur. '
        },{
            id: 5,
            image: 'https://images.unsplash.com/photo-1545394410-ec12ae97e750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2617&q=80',
            title: 'Mists in the Snow',
            description: 'Integer facilisis vitae ante sed aliquam. Nulla augue dolor, placerat eget turpis eu, eleifend sodales libero.'
        }
    ],
    usersData: [
        {
            id: 0,
            name: 'Victoria Thornton',
            country: 'France',
            city: 'Paris',
            avatar: 'https://images.unsplash.com/photo-1514315384763-ba401779410f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2460&q=80',
            following: true
        },{
            id: 1,
            name: 'Thane Cantrell',
            country: 'Uruguay',
            city: 'Montevideo',
            avatar: 'https://images.unsplash.com/photo-1530645298377-82c8416d3f90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2640&q=80',
            following: false
        },{
            id: 2,
            name: 'Wren Wickham',
            country: 'Congo Republic',
            city: 'Brazzaville',
            avatar: 'https://images.unsplash.com/photo-1508283117461-192035f21953?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80',
            following: false
        },{
            id: 3,
            name: 'Annabel Stanford',
            country: 'Mexico',
            city: 'Guadalajara',
            avatar: 'https://images.unsplash.com/photo-1542838686-d4856db9ef1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80',
            following: false
        }
    ],
    prizesData: [
        {
            id: 0,
            place: '1st',
            title: 'Tree Ornament',
            image: 'https://images.unsplash.com/photo-1512474932049-78ac69ede12c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
        },{
            id: 1,
            place: '2nd',
            title: 'Cookies',
            image: 'https://images.unsplash.com/photo-1510545724575-ca1a01b0cd1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
        },{
            id: 2,
            place: '3rd',
            title: 'Surprise Gift',
            image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
        }
    ],
    commentsData: [
        {
            id: 0,
            username: 'QuintellaNoel',
            avatar: 'https://images.unsplash.com/photo-1535930749574-1399327ce78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2552&q=80',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non egestas tortor.',
            time: '1 mins ago',
            upvote: true,
            total_upvotes: 13,
            downvote: false,
            total_downvotes: 54
        },{
            id: 1,
            username: 'JazminChancellor',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
            message: 'Vestibulum ullamcorper varius mauris ac maximus. Integer et laoreet eros, eu mattis nunc. Quisque vel arcu ut quam pretium malesuada vitae quis nisl.',
            time: '3 mins ago',
            upvote: false,
            total_upvotes: 38,
            downvote: true,
            total_downvotes: 3
        },{
            id: 2,
            username: 'MelvilleConner',
            avatar: 'https://images.unsplash.com/photo-1505150892987-424388901632?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80',
            message: 'Fusce risus libero, dictum sit amet quam id, aliquet placerat sapien. Fusce nec molestie ante.',
            time: '9 mins ago',
            upvote: false,
            total_upvotes: 86,
            downvote: false,
            total_downvotes: 81
        }
    ],
    matchData: [
        {
            id: 0,
            top: {
                id: 0,
                name: 'Victoria Thornton',
                avatar: 'https://images.unsplash.com/photo-1514315384763-ba401779410f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2460&q=80',
                title: 'Ragged Angels',
                video_img: 'https://images.unsplash.com/photo-1546416761-4601022bedf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80',
            },
            bottom: {
                id: 1,
                name: 'Thane Cantrell',
                avatar: 'https://images.unsplash.com/photo-1530645298377-82c8416d3f90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2640&q=80',
                title: 'The White Destruction',
                video_img: 'https://images.unsplash.com/photo-1543363136-2ae17fd2efc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80',
            }
        },{
            id: 1,
            top: {
                id: 2,
                name: 'Wren Wickham',
                avatar: 'https://images.unsplash.com/photo-1508283117461-192035f21953?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80',
                title: 'Healer of Waves',
                video_img: 'https://images.unsplash.com/photo-1546398770-b134faf3de65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80',
            },
            bottom: {
                id: 3,
                name: 'Annabel Stanford',
                avatar: 'https://images.unsplash.com/photo-1542838686-d4856db9ef1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80',
                title: 'The Flame\'s End',
                video_img: 'https://images.unsplash.com/photo-1546365243-9af28be22b5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2534&q=80',
            }
        },{
            id: 2,
            top: {
                id: 4,
                name: 'Kerrie Batts',
                avatar: 'https://images.unsplash.com/photo-1519838255388-73be30bda0e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
                title: 'The Trainer of the Dying',
                video_img: 'https://images.unsplash.com/photo-1546425479-07c6a5c77230?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
            },
            bottom: {
                id: 5,
                name: 'Mack Wootton',
                avatar: 'https://images.unsplash.com/photo-1504455583697-3a9b04be6397?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
                title: 'Dreams in the Luck',
                video_img: 'https://images.unsplash.com/photo-1546432551-7525c28e48f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
            }
        }
    ]
}

export default appData
