import React from 'react';
import { ScrollView } from 'react-native';
import { WoofCard } from '../Specific/WoofCard/WoofCard.js';
import { WoofPost } from '../Specific/WoofPost/WoofPost.js';
import { Heading } from '../Reusable/Heading.js';
import { data } from '../../fakeApi.js';
import { Avatar } from '../Reusable/Avatar.js';
import { Title } from '../Reusable/Title.js';

export const HomeScreen = () => {

  return(
      <ScrollView>

        <Heading>Trending Woofs</Heading>

        <ScrollView horizontal>
          
          {data.woofs.map(woof => {
            return <WoofCard key={woof.id} name={woof.name} avatar={woof.avatar} />
          })}

        </ScrollView>

        <Heading>New Woof Posts</Heading>

        {data.posts.map(post => {
          return <WoofPost key={post.id} image={post.image} title={post.title} description={post.description} />
        })}

      </ScrollView>
  );
  
}