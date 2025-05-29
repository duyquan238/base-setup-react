// Add custom global types if needed
export interface ApiResponse<T> {
  success: boolean;
  data: T;
}
