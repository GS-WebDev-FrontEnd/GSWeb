#Iniciando Lista de dicionarios
sensores = [
    {"Nome":"Sensor Marginal tiete", "nivel": 45},
    {"Nome":"Sensor Marginal Pinheiros","nivel":65},
    {"Nome":"Sensor Avenida dos Estados","nivel":85},
]
#Funcao para simular chuva
def simular_chuva(sensor,aumento):
    sensor["nivel"] += aumento
    if sensor ["nivel"] > 100:
        sensor["nivel"] = 100
#Alerta
def verificar_alerta(sensor):
    nivel = sensor["nivel"]
    nome = sensor["Nome"]

    if nivel >=90:
        print(f"Alerta Critico: {nome} com nivel em {nivel}%. Notificar defesa Civil")
    elif nivel >= 70:
        print(f"Alerta: {nome} com {nivel}%, estado de alerta. População deve ser avisada")
    else:
        print(f"{nome} está seguro. Nivel atual {nivel}%.")

# Laço principal: simula chuva e gera alertas
for sensor in sensores:
    simular_chuva(sensor, aumento=20)  # simula 20% de aumento por exemplo
    verificar_alerta(sensor)

# Relatório final
print("\n📋 Relatório Final:")
for sensor in sensores:
    print(f"{sensor['Nome']}: {sensor['nivel']}% do nível.")