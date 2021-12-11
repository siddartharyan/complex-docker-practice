export this=${pwd}
echo "applying k8s files for client"
kubectl apply -f $this/client-deployment-yaml
kubectl apply -f $this/client-service.yaml
echo "applying k8s files for server"
kubectl apply -f $this/server-deployment.yaml
kubectl apply -f $this/server-service.yaml
echo "applying k8s files for worker"
kubectl apply -f $this/worker-deployment.yaml
echo "applying k8s files for redis"
kubectl apply -f ./redis-deployment.yaml
kubectl apply -f ./redis-service.yaml
