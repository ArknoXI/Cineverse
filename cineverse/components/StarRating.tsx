import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface StarRatingProps {
  rating: number;          
  onRate?: (rate: number) => void; 
  size?: number;           
  color?: string;
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  onRate,
  size = 24,
  color = '#FFD700',
}) => {
  
  const stars = [1, 2, 3, 4, 5];

  return (
    <View style={styles.container}>
      {stars.map((starValue) => {
        
        let iconName: keyof typeof Ionicons.glyphMap = 'star-outline';

        if (rating >= starValue) {
          iconName = 'star'; 
        } else if (rating >= starValue - 0.5) {
          iconName = 'star-half'; 
        }

        
        if (onRate) {
          return (
            <TouchableOpacity
              key={starValue}
              onPress={() => onRate(starValue)}
              activeOpacity={0.7}
            >
              <Ionicons name={iconName} size={size} color={color} style={styles.star} />
            </TouchableOpacity>
          );
        } else {
          return (
            <Ionicons
              key={starValue}
              name={iconName}
              size={size}
              color={color}
              style={styles.star}
            />
          );
        }
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    marginRight: 2,
  },
});