import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Button, ActivityIndicator, Alert, StyleSheet } from 'react-native';
import { useMovieStatus, Review } from '../lib/MovieStatusContext';

interface MovieReviewManagerProps {
  movieId: string;
}

const MovieReviewManager: React.FC<MovieReviewManagerProps> = ({ movieId }) => {
  const { getMyReview, deleteReview } = useMovieStatus();
  const [review, setReview] = useState<Review | null>(null);
  const [loadingReview, setLoadingReview] = useState(true);

  const fetchReview = useCallback(async () => {
    setLoadingReview(true);
    const fetchedReview = await getMyReview(movieId);
    setReview(fetchedReview);
    setLoadingReview(false);
  }, [movieId, getMyReview]);

  useEffect(() => {
    fetchReview();
  }, [fetchReview]);

  const handleDeleteReview = async () => {
    Alert.alert(
      "Confirmar",
      "Tem certeza que deseja apagar sua avaliação?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Apagar",
          onPress: async () => {
            const numericMovieId = parseInt(movieId, 10);
            if (isNaN(numericMovieId)) return;

            const success = await deleteReview(numericMovieId);
            if (success) {
              setReview(null);
            }
          }
        }
      ]
    );
  };

  if (loadingReview) {
    return <ActivityIndicator size="small" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      {review ? (
        <View style={styles.reviewBox}>
          <Text style={styles.ratingText}>Minha Avaliação: {review.rating} / 5</Text>
          <Text style={styles.commentText}>Comentário: {review.comment || 'N/A'}</Text>
          
          <View style={styles.buttonContainer}>
             <Button 
              title="Apagar Review" 
              color="#CC0000"
              onPress={handleDeleteReview} 
            />
          </View>
        </View>
      ) : (
        <Text style={styles.emptyText}>Você ainda não avaliou este filme.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 10,
  },
  reviewBox: {
    padding: 10,
    backgroundColor: '#2C2C2E',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3A3A3C',
  },
  ratingText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  commentText: {
    marginVertical: 5,
    color: '#E5E5EA',
  },
  emptyText: {
    fontStyle: 'italic',
    color: '#8E8E93',
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 10,
  }
});

export default MovieReviewManager;
