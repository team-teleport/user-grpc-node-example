import { userGrpc, user } from "sooni-user-grpc-node";
import * as grpc from "grpc";

const UserClient = userGrpc.UserClient
const channelCredential = grpc.credentials.createInsecure();
const userClient = new UserClient("127.0.0.1:9090", channelCredential);

export default userClient;