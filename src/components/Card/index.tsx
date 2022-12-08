import React from "react";
import { FiThumbsUp } from 'react-icons/fi'

import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./styles";

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg" />
        <Content>
            <UserInfo>
                <UserPicture src="https://avatars.githubusercontent.com/u/89096810?v=4" />
                <div>
                    <h4>Bruno</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito para o curso de html e css no bootcamp dio da Global avanade...<strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS</h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
};

export { Card };
