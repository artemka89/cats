import styled, { keyframes } from "styled-components";

export const Card = styled.div`
  width: "300px";
  padding: "20px";
  display: flex;
  flex-direction: column;
  gap: "10px";
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

interface ButtonProps {
  disabled?: boolean;
}

export const CardButton = styled.button<ButtonProps>`
  width: 100%;
  height: 40px;
  margin-top: 20px;
  padding: 0 20px;
  border-radius: 5px;
  background-color: #0077ff;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:disabled {
    background-color: #8d8d8d;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: #0066cc;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 5px;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  object-fit: cover;
`;

const shimmer = keyframes`
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
`;

interface SkeletonProps {
  height?: string;
}

export const Skeleton = styled.div<SkeletonProps>`
  width: 100%;
  height: ${(props) => props.height || "20px"};
  border-radius: 5px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite linear;
`;
