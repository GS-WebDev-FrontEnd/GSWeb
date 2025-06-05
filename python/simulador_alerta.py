import json

# Sensores simulados
sensores = [
    {"Nome": "Sensor Marginal Tietê", "nivel": 45},
    {"Nome": "Sensor Marginal Pinheiros", "nivel": 65},
    {"Nome": "Sensor Avenida dos Estados", "nivel": 92}
]

logs = []

def simular_chuva(sensor, aumento):
    sensor["nivel"] += aumento
    if sensor["nivel"] > 100:
        sensor["nivel"] = 100

def simular_envio_email(sensor):
    log = f"📧 E-mail para Defesa Civil: {sensor['Nome']} com {sensor['nivel']}%"
    logs.append(log)

def simular_envio_sms(sensor):
    log = f"📱 SMS para equipe da prefeitura: {sensor['Nome']} com {sensor['nivel']}%"
    logs.append(log)

def verificar_alerta(sensor):
    nivel = sensor["nivel"]
    if nivel >= 90:
        print(f"🚨 ALERTA CRÍTICO: {sensor['Nome']} com {nivel}%")
        simular_envio_email(sensor)
        simular_envio_sms(sensor)

# Simula o processo
for sensor in sensores:
    simular_chuva(sensor, aumento=20)
    verificar_alerta(sensor)

# Salva sensores
with open("src/data/status_sensores.json", "w") as f:
    json.dump(sensores, f, indent=2)

# Salva logs da simulação
with open("src/data/log_simulacao.json", "w") as f:
    json.dump(logs, f, indent=2)

print("📋 Simulação finalizada com alertas e logs.")
