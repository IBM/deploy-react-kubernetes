#!/bin/bash
echo 'hello'
./Bluemix_CLI/bin/bluemix login --apikey $BXIAM
# export KUBECONFIG=$KUBECONFIG
# kubectl delete all --all
# bx cr build -t registry.ng.bluemix.net/rdayao/deploy-react-kubernetes .
# kubectl run deploy-react-kubernetes-deployment —-image registry.ng.bluemix.net/rdayao/deploy-react-kuberneteskubectl expose deployment/deploy-react-kubernetes-deployment
# —-type=NodePort —-name=deploy-react-kubernetes-service —-port=3000
