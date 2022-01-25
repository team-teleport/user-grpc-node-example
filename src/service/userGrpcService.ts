import { user } from "sooni-user-grpc-node";
import * as grpc from "grpc";
import userClient from "../userGrpcClient";
import { UserInfoRequest } from "sooni-user-grpc-node/dist/proto/user_pb";

interface UserInfo {
  userId: number;
  username: string;
  profileImageUrl: string;
  email: string;
  avatar: string;
}

const getUserInfoFromGrpcServer = (request: UserInfoRequest): Promise<UserInfo | Error> => {
  return new Promise((resolve, reject) => {
    userClient.getUserInfo(request, (err: grpc.ServiceError | null, response: user.UserInfoResponse) => {
      if (!err) {
        const userInfo: UserInfo = {
          userId: response.getUserid(),
          username: response.getUsername(),
          profileImageUrl: response.getProfileimageurl(),
          email: response.getEmail(),
          avatar: response.getAvatar()
        }
        resolve(userInfo)
      }
      reject(new Error("grpc communication failed."));
    });
  });
}

const getUserInfo = async (userId: number): Promise<UserInfo | Error> => {
  const request = new user.UserInfoRequest();
  request.setUserid(userId);
  return getUserInfoFromGrpcServer(request);
}

export { getUserInfo };