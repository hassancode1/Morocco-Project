import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

export interface UserType {
  firstName: string;
  email: string;
  token: string;
  lastName: string;
  role: string;
}

export interface UserState {
  user: UserType;
}

// Load user from localStorage on initialization
const loadUserFromStorage = (): UserState => {
  try {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      return {
        user: {
          firstName: parsed.firstName || '',
          lastName: parsed.lastName || '',
          token: parsed.token || '',
          email: parsed.email || '',
          role: parsed.role || '',
        },
      };
    }
  } catch (error) {
    console.error('Error loading user from localStorage:', error);
  }
  return {
    user: {
      firstName: '',
      lastName: '',
      token: '',
      email: '',
      role: '',
    },
  };
};

const initialState: UserState = loadUserFromStorage();

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
      // Save to localStorage whenever user is set
      try {
        localStorage.setItem('user', JSON.stringify(action.payload));
      } catch (error) {
        console.error('Error saving user to localStorage:', error);
      }
    },
    clearUser: (state) => {
      state.user = {
        firstName: '',
        lastName: '',
        token: '',
        email: '',
        role: '',
      };
      // Remove from localStorage on logout
      try {
        localStorage.removeItem('user');
      } catch (error) {
        console.error('Error removing user from localStorage:', error);
      }
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export const userSelector = (state: RootState) => state.user;
export default userSlice.reducer;
