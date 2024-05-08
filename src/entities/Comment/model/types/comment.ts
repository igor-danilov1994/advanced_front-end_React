import { User } from 'entities/User';
import { EntityState } from '@reduxjs/toolkit';

export interface Comment {
  id: string;
  text: string;
  user: User;
}

export interface CommentsSchema extends EntityState<Comment> {
  isLoading: boolean;
  error?: string;
}
