# Workshop: Sensor APIs

In diesem Workshop werden wir uns mit den standardisierten Sensor APIs und deren Anwendung auf mobilen Endgeräten beschäftigen. Diese sind in der [W3C Generic Sensor API Spezifikation](https://www.w3.org/TR/generic-sensor/) definiert.

## Voraussetzungen

* Endgerät zum Testen:
  * Android Smartphone mit Chrome für Android (Version XX oder höher) **ODER**
  * Android Simulator mit Chrome für Android (Version XX oder höher)
* ngrok CLI installiert und Account angelegt (https://ngrok.com/)
* Docker installiert (https://www.docker.com/)

## Befehle

| Befehl | Beschreibung |
| --- | --- |
| `make up` | Startet die Docker Container |
| `make down` | Stoppt die Docker Container |
| `make restart` | Started die Docker Container neu |
| `make logs` | Zeigt die Logs der Docker Container an |
| `make tunnel` | Startet einen Tunnel zu localhost:6060 |
