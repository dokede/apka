# 1. Bazowy obraz z Pythonem
FROM python:3.11-slim

# 2. Katalog roboczy w kontenerze
WORKDIR /app

# 3. Kopiujemy zależności
COPY requirements.txt .

# 4. Instalujemy wszystkie biblioteki
RUN pip install --no-cache-dir -r requirements.txt

# 5. Kopiujemy całą aplikację
COPY . .

# 6. Port, na którym działa aplikacja
EXPOSE 5000

# 7. Komenda startowa
CMD ["python", "app.py"]
