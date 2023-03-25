import React from 'react';
import { ScrollView } from 'react-native';
import { WoofCard } from '../Specific/WoofCard/WoofCard.js';
import { WoofPost } from '../Specific/WoofPost/WoofPost.js';
import { Heading } from '../Reusable/Heading.js';
import { Avatar } from '../Reusable/Avatar.js';
import { Title } from '../Reusable/Title.js';

export const HomeScreen = () => {

  return(
      <ScrollView>

        <Heading>Trending Woofs</Heading>

        <ScrollView horizontal>
          <WoofCard name="Rex" avatar="https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=648&q=80" />
          <WoofCard name="Rex" avatar="https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=648&q=80" />
          <WoofCard name="Rex" avatar="https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=648&q=80" />
          <WoofCard name="Rex" avatar="https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=648&q=80" />
          <WoofCard name="Rex" avatar="https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=648&q=80" />
        </ScrollView>

        <Heading>New Woof Posts</Heading>

        <WoofPost image="https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=967&q=80" title="Happy Woofs" description="How to keep your woof health and happy. We\'ve asked some of the best experts out there." />

      </ScrollView>
  );
  
}