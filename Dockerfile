# Imagen base con Python 3.9
FROM python:3.9

# Establecer directorio de trabajo en el contenedor
WORKDIR /app

# Copiar archivo de requerimientos
COPY requirements.txt .

# Instalar dependencias
RUN pip install --no-cache-dir -r requirements.txt
RUN apt-get update && apt-get install -y netcat

# Copiar archivos del proyecto al contenedor
COPY . .

# Exponer el puerto 5000 para Flask
EXPOSE 5000

# Establecer las variables de entorno necesarias para Flask y SQLAlchemy
ENV FLASK_APP=app.py

# Ejecutar el comando para crear las tablas en la base de datos y ejecutar la aplicación
CMD flask run --host=0.0.0.0