
🚀 Despliegue DevSecOps con ArgoCD y Kubernetes (Kind)
Este proyecto implementa un flujo completo de Integración Continua (CI) y Despliegue Continuo (CD) siguiendo la metodología GitOps.

🏗️ Arquitectura de la Solución
Se utiliza un modelo de arquitectura basado en capas de seguridad y automatización:

CI (GitHub Actions): Se encarga de las pruebas unitarias (cobertura >80%), análisis estático de seguridad (SCA) y construcción de la imagen.

CD (GitOps con ArgoCD): Sincronización automática entre el repositorio y el clúster.

Infraestructura: Clúster local mediante Kind (Kubernetes in Docker).

🛠️ Tecnologías Utilizadas
Lenguaje: Node.js

Seguridad: Trivy (SCA & DAST)

CI/CD: GitHub Actions & ArgoCD

Container: Docker Hub

Orquestación: Kubernetes (Kind)

🔒 Seguridad Implementada
Análisis Estático (SCA): Escaneo de dependencias en el sistema de archivos antes del build.

Análisis Dinámico (DAST): Escaneo de la imagen Docker final en busca de vulnerabilidades de runtime.

Gestión de Secretos: Uso de GitHub Secrets para proteger credenciales de Docker Hub.

Inmutabilidad: Uso de Tags basados en el COMMIT_SHA para evitar colisiones de imágenes.

☸️ Manifiesto de ArgoCD
Para gestionar esta aplicación en ArgoCD, se utilizó el siguiente manifiesto de tipo `Application`:

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: webapp-devsecops
  namespace: argocd
spec:
  project: default
  source:
    repoURL: 'https://github.com/victorj19/prueba_devsecops.git'
    path: k8s
    targetRevision: HEAD
  destination:
    server: 'https://kubernetes.default.svc'
    namespace: default
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
```

<img width="395" height="330" alt="Captura desde 2026-03-09 19-33-12" src="https://github.com/user-attachments/assets/2b962212-fd1d-4e8b-b2db-3308d92729bf" />



🚀 Guía de Ejecución Local
1. Clonar el repositorio
```Bash
git clone https://github.com/victorj19/prueba_devsecops.git
cd prueba_devsecops
```
2. Levantar el entorno (Kind)
```
kind create cluster --name devsecops-cluster
```
3. Instalación de ArgoCD
```
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```
4. Acceso a la Aplicación
Para ver la aplicación corriendo localmente:
```
kubectl port-forward deployment/my-app 3000:3000
Visitar: http://localhost:3000
```      
