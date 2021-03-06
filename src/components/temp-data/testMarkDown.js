export default `# 服务的注册与发现

## Eureka介绍

Spring Cloud 默认使用Eureka作为服务注册中心。

它负责对所有微服务进行注册、发现和统一管理。

### AP原则

保证分布式系统能满足高可用性和分区可容忍性。

### Eureka比Zookeeper哪里好

Eureka遵守AP（高可用、分区可容忍）原则，Zookeeper遵守CP（数据一致，分区可容忍）原则。

Eureka能够很好的应对因为网络故障导致部分节点失去联系的情况，不会像Zookeeper那样因为耗时的leader选举，导致整个注册服务瘫痪。

## Eureka的使用

### 服务端

#### 单个服务端

1. 新建maven项目，添加eureka服务端的pom依赖：

   \`\`\`xml
   <dependency>
       <groupId>org.springframework.cloud</groupId>
       <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
   </dependency>
   \`\`\`

2. 添加yml/properties配置属性：

   \`\`\`yaml
   server:
     port: 8777
   # Eureka实例的域名
   eureka:
     instance:
       hostname: localhost
     client:
       # 关闭客户端行为，防止将自己注册为一个client
       register-with-eureka: false
       fetch-registry: false
       # 暴露给外部注册用的uri
       serviceUrl:
         defaultZone: http://\${eureka.instance.hostname}:\${server.port}/eureka/
   # 当前应用的名字
   spring:
     application:
       name: eureka-center-standalone
   \`\`\`

3. 在启动类上添加对应的服务端注解 \`@EnableEurekaServer\`：

   \`\`\`java
   /**
    * 注册中心
    *
    * @author CloudSen
    */
   @SpringBootApplication
   @EnableEurekaServer
   @Slf4j
   public class RegistrationApplication {
       static {
           log.info("======> [ INFO ] Starting registration server...");
       }

       public static void main(String[] args) {
           new SpringApplicationBuilder(RegistrationApplication.class)
                   .web(WebApplicationType.SERVLET)
                   .run(args);
       }
   }
   \`\`\`

#### 服务端集群（以双节点为例）

简单来说就是当前Eureka Server启动时要分别注册到其他Eureka Server。

1. 设置电脑的hosts，添加两个映射到127.0.0.1的域名hostname：

   \`\`\`\
   127.0.0.1 localhost1
   127.0.0.1 localhost2
   \`\`\`

2. 为Eureka项目添加不同的配置文件，设置***不同的hostname和port***：

   节点1：

   \`\`\`yaml
   server:
     port: 8777
   # 启动两个eureka，互相注册，实现高可用注册中心
   eureka:
     instance:
       hostname: localhost1
     client:
       serviceUrl:
         # 注册到另外的eureka服务器
         defaultZone: http://localhost2:8666/eureka/
   \`\`\`

   节点2：

   \`\`\`yaml
   server:
     port: 8666
   # 启动两个eureka，互相注册，实现高可用注册中心
   eureka:
     instance:
       hostname: localhost2
     client:
       serviceUrl:
         # 注册到另外的eureka服务器
         defaultZone: http://localhost1:8777/eureka/
   \`\`\`

3. 将项目用maven打成一个jar包，然后用不同的配置文件分别启动两个Eureka实例：

   \`\`\`bash
   java -jar .\\registration-center-0.0.1-SNAPSHOT.jar
   java -jar .\\registration-center-0.0.1-SNAPSHOT.jar --spring.profiles.active=dev2
   \`\`\`

### 客户端

1. 添加eureka客户端的pom依赖：

   \`\`\`xml
   <dependency>
       <groupId>org.springframework.cloud</groupId>
       <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
   </dependency>
   \`\`\`

2. 添加yml/properties配置属性：

   \`\`\`yaml
   server:
     port: 8700
   eureka:
     client:
       serviceUrl:
         # 列出所有的eureka集群服务器
         defaultZone: http://localhost1:8777/eureka/,http://localhost2:8666/eureka/
   \`\`\`

3. 在启动类上添加对应的客户端注解 \`@EnableEurekaClient\`：

   \`\`\`java
   /**
    *
    * @author CloudSen
    */
   @Slf4j
   @EnableEurekaClient
   @SpringBootApplication
   public class SysManagementApplication {
       static {
           log.info("======> [ INFO ] Starting system management server...");
       }

       public static void main(String[] args) {
           new SpringApplicationBuilder(SysManagementApplication.class)
                   .web(WebApplicationType.SERVLET)
                   .run(args);
       }
   }
   \`\`\`


`
