import styled, { createGlobalStyle  } from 'styled-components'

export default createGlobalStyle`
/* css, injectGlobal   */
body{
    margin: 0;
}

`
export const MyBlogBody = styled.div`
max-width: 1024px;
margin: 10px auto;
`

export const HeaderSC = styled.header`

width: 100%;
background-color: rgb(196,224,224, 0.8);
padding: 30px 0px;
margin-top: 15px;
border-radius: 50px;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;

    h1{
        letter-spacing: 1.5px;
        color: rgb(0, 139, 139);
    }
    div{
        a{
            text-decoration: none;
            color: rgb(0, 139, 139);
            padding: 0 10px;
            font-size: 20px;
            font-weight: bold;
        }
        a:hover{
            color: rgb(1, 66, 63);
        }
    }

`

export const HomePageWrapperSC = styled.div`

width: 100%;
background: rgb(196,224,224,0.6);
border-radius: 30px;
a{
    text-decoration: none;
    color: black;
}

    h1{
        text-align: center;
        padding: 15px 0;
        color: rgb(5, 116, 117);
        margin-bottom: -10px;
    }
    .short-info-section{
        display: grid;
        grid-template-columns: 70% 30%;
    .post-wrapper{
        h4{
            margin-left: 30px;
        }
        .short-post{
            background: rgb(196,224,224,0.7);
            margin: 12px;
            border-radius: 15px;
            padding: 5px 30px;

            h3{
                letter-spacing: 1px;
                color: cornflowerblue;
            }
        }
        .short-post:hover{
            background: rgb(196,224,224,0.9);
        }
    }
        .comments-wrapper{
            h4{
            margin-left: 30px;
            }
            .short-comment{
                background: rgb(196,224,224,0.7);
                margin: 12px;
                border-radius: 15px;
                padding: 5px 30px;
            }
            .short-comment:hover{
                a{
                    color: rgb(0, 139, 139);
                }
            }
        }
    }

`
export const PostPageSC = styled.div`
width: 100%;
background: rgb(196,224,224,0.6);
border-radius: 30px;
a{
    text-decoration: none;
    color: black;
}

    h1{
        text-align: center;
        padding: 15px 0;
        color: rgb(5, 116, 117);
        margin-bottom: -10px;
    }
    .create-post-wrapper{
        .btn-create-post{
            width:100%;
            background: rgb(196,224,224,0.7);
            border-radius: 30px;
            border: none;
            padding: 10px;
            color:rgb(0, 139, 139);
            font-size: 16px;
            margin: 5px 0;
        }
        .btn-create-post:hover{
            background: rgb(196,224,224,1);
        }
        .form-close{
            display:none;
            height:1px;
        }
        .form-open{
            display: flex;
            flex-direction: column;
            label{
                padding: 5px 15px;
                
                input{
                    float: right;
                    margin-left: 5px;
                    border: none;
                    width: 80%;
                    height: 30px;
                    border-radius: 30px;
                    margin-right: 15px;
                    color: rgb(0, 139, 139);
                }
            }

        }


    }

    .all-posts-wrapper{
        .short-post{
            background: rgb(196,224,224,0.7);
            margin: 12px;
            border-radius: 15px;
            padding: 5px 30px;

            h3{
                letter-spacing: 1px;
                color: cornflowerblue;
            }
            a{
                button{
                    width:30%;
                    background: rgb(196,224,224,0.7);
                    border-radius: 30px;
                    border: none;
                    padding: 10px;
                    color:rgb(0, 139, 139);
                    font-size: 16px;
                    margin: 5px 0;
                }
                button:hover{
                    background: rgb(196,224,224,1);
                }
            }
        }
    }
`

export const PostWrapperSC = styled.div`
width: 100%;
background: rgb(196,224,224,0.6);
border-radius: 30px;
margin-top: 40px;
.comment-form{
    margin-left: 40px;
    input{
        width:30%;
        background: rgb(196,224,224,0.7);
        border-radius: 30px;
        border: none;
        padding: 10px;
        color:rgb(0, 139, 139);
        font-size: 16px;
        margin: 5px 0;
    }
    input:hover{
        background: rgb(196,224,224,1);
    }
}

    .single-post{

        padding: 10px 40px;

        h2{
            letter-spacing: 1px;
            color: cornflowerblue;
        }
        button{
            width:30%;
            background: rgb(196,224,224,0.7);
            border-radius: 30px;
            border: none;
            padding: 10px;
            color:rgb(0, 139, 139);
            font-size: 16px;
            margin: 5px 0;
        }
        button:hover{
            background: rgb(196,224,224,1);
        }
    }
    h3{
        margin-left: 40px;
    }
                
    .single-comment{
        padding: 10px 40px;
           
    }

`