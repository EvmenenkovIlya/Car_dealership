import { LoginRequest, LoginResponse, RegistrationRequest, RegistrationResponse } from './types';

export const loginUser = async (credentials: LoginRequest): Promise<LoginResponse> => {
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    const data: LoginResponse = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to login');
    }

    return data;
  } catch (error) {
    return {
      success: false,
      error: 'Failed to login',
    };
  }
};

export const registerUser = async (credentials: RegistrationRequest): Promise<RegistrationResponse> => {
  try {
    const response = await fetch('/api/create-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    const data: RegistrationResponse = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to create user');
    }

    return data;
  } catch (error) {
    return {
      success: false,
      error: 'Failed to create user',
    };
  }
};
