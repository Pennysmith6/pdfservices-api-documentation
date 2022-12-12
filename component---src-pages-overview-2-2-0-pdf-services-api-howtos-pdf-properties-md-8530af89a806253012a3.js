"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[9165],{63983:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return c},default:function(){return f}});var r,o=t(87462),i=t(63366),a=(t(15007),t(64983)),s=t(91515),p=["components"],c={},l=(r="CodeBlock",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",e)}),d={_frontmatter:c},u=s.Z;function f(e){var n=e.components,t=(0,i.Z)(e,p);return(0,a.mdx)(u,(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"get-pdf-properties"},"Get PDF Properties"),(0,a.mdx)("h3",{id:"get-pdf-properties-as-a-json-file"},"Get PDF Properties as a JSON File"),(0,a.mdx)("p",null,"The sample below fetches the properties of an input PDF, as a JSON file."),(0,a.mdx)(l,{slots:"heading, code",repeat:"4",languages:"Java, .NET, Node JS, Rest API",mdxType:"CodeBlock"}),(0,a.mdx)("h4",{id:"java"},"Java"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples\n// Run the sample:\n// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.pdfproperties.PDFPropertiesAsFile\n\n  public class PDFPropertiesAsFile {\n\n    // Initialize the logger.\n    private static final Logger LOGGER = LoggerFactory.getLogger(PDFPropertiesAsFile.class);\n\n    public static void main(String[] args) {\n\n      try {\n\n        // Initial setup, create credentials instance.\n        Credentials credentials = Credentials.serviceAccountCredentialsBuilder()\n            .fromFile("pdfservices-api-credentials.json")\n            .build();\n\n        //Create an ExecutionContext using credentials and create a new operation instance.\n        ExecutionContext executionContext = ExecutionContext.create(credentials);\n        PDFPropertiesOperation pdfPropertiesOperation = PDFPropertiesOperation.createNew();\n\n        // Provide an input FileRef for the operation\n        FileRef source = FileRef.createFromLocalFile("src/main/resources/pdfPropertiesInput.pdf");\n        pdfPropertiesOperation.setInputFile(source);\n\n        // Execute the operation\n        FileRef result = pdfPropertiesOperation.executeAndReturnFileRef(executionContext);\n\n        // Save the result at the specified location\n        result.saveAs("output/pdfPropertiesOutput.json");\n\n      } catch (ServiceApiException | IOException | SdkException | ServiceUsageException ex) {\n        LOGGER.error("Exception encountered while executing operation", ex);\n      }\n    }\n  }\n  \n')),(0,a.mdx)("h4",{id:"net"},".NET"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_net_samples\n// Run the sample:\n// cd PDFPropertiesAsFile/\n// dotnet run PDFPropertiesAsFile.csproj\n\nnamespace PDFPropertiesAsFile\n{\n    class Program\n    {\n        private static readonly ILog log = LogManager.GetLogger(typeof(Program));\n        static void Main()\n    {\n        //Configure the logging\n        ConfigureLogging();\n        try\n        {\n            // Initial setup, create credentials instance.\n            Credentials credentials = Credentials.ServiceAccountCredentialsBuilder()\n            .FromFile(Directory.GetCurrentDirectory() + "/pdfservices-api-credentials.json")\n            .Build();\n\n            //Create an ExecutionContext using credentials and create a new operation instance.\n            ExecutionContext executionContext = ExecutionContext.Create(credentials);\n            PDFPropertiesOperation pdfPropertiesOperation = PDFPropertiesOperation.CreateNew();\n\n            // Provide an input FileRef for the operation\n            FileRef source = FileRef.CreateFromLocalFile(@"pdfPropertiesInput.pdf");\n            pdfPropertiesOperation.SetInput(source);\n\n            // Execute the operation.\n            FileRef result = pdfPropertiesOperation.ExecuteAndReturnFileRef(executionContext);\n\n            // Save the result to the specified location.\n            result.SaveAs(Directory.GetCurrentDirectory() + "/output/pdfPropertiesOutput.json");\n\n        }\n        catch (ServiceUsageException ex)\n        {\n            log.Error("Exception encountered while executing operation", ex);\n        }\n        // Catch more errors here. . .\n    }\n\n        static void ConfigureLogging()\n    {\n        ILoggerRepository logRepository = LogManager.GetRepository(Assembly.GetEntryAssembly());\n        XmlConfigurator.Configure(logRepository, new FileInfo("log4net.config"));\n    }\n    }\n}\n')),(0,a.mdx)("h4",{id:"node-js"},"Node JS"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample\n// Run the sample:\n// node src/exportpdf/pdf-properties-as-file.js\n\nconst PDFServicesSdk = require('@adobe/pdfservices-node-sdk');\n\ntry {\n    // Initial setup, create credentials instance.\n    const credentials =  PDFServicesSdk.Credentials\n        .serviceAccountCredentialsBuilder()\n        .fromFile(\"pdfservices-api-credentials.json\")\n        .build();\n\n    //Create an ExecutionContext using credentials and create a new operation instance.\n    const clientContext = PDFServicesSdk.ExecutionContext.create(credentials),\n        pdfPropertiesOperation = PDFServicesSdk.PDFProperties.Operation.createNew();\n\n    // Set operation input from a source file.\n    const input = PDFServicesSdk.FileRef.createFromLocalFile('resources/pdfPropertiesInput.pdf');\n    pdfPropertiesOperation.setInput(input);\n\n    // Execute the operation and Save the result to the specified location.\n    pdfPropertiesOperation.executeAndReturnFileRef(clientContext)\n        .then(result => result.saveAsFile('output/PDFPropertiesOutput.json'))\n        .catch(err => {\n            if(err instanceof PDFServicesSdk.Error.ServiceApiError\n                || err instanceof PDFServicesSdk.Error.ServiceUsageError) {\n                console.log('Exception encountered while executing operation', err);\n            } else {\n                console.log('Exception encountered while executing operation', err);\n            }\n        });\n} catch (err) {\n    console.log('Exception encountered while executing operation', err);\n}\n")),(0,a.mdx)("h4",{id:"rest-api"},"Rest API"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Please refer our Rest API docs for more information\n// https://documentcloud.adobe.com/document-services/index.html#post-pdfProperties\n\ncurl --location --request POST \'https://cpf-ue1.adobe.io/ops/:create?respondWith=%7B%22reltype%22%3A%20%22http%3A%2F%2Fns.adobe.com%2Frel%2Fprimary%22%7D\' \\\n--header \'Authorization: Bearer {{Placeholder for token}}\' \\\n--header \'Accept: application/json, text/plain, */*\' \\\n--header \'x-api-key: {{Placeholder for client_id}}\' \\\n--header \'Prefer: respond-async,wait=0\' \\\n--form \'contentAnalyzerRequests="{\n  \\"cpf:inputs\\": {\n    \\"params\\": {\n      \\"cpf:inline\\": {\n        \\"pageLevel\\": true\n      }\n    },\n    \\"documentIn\\": {\n      \\"cpf:location\\": \\"InputFile0\\",\n      \\"dc:format\\": \\"application/pdf\\"\n    }\n  },\n  \\"cpf:engine\\": {\n    \\"repo:assetId\\": \\"urn:aaid:cpf:Service-fd9b06fe2f164df7975254581d6ab00e\\"\n  },\n  \\"cpf:outputs\\": {\n    \\"metadata\\": {\n      \\"dc:format\\": \\"application/json\\",\n      \\"cpf:location\\": \\"jsonoutput\\"\n    }\n  }\n}"\' \\\n--form \'InputFile0=@"{{Placeholder for input file (absolute path)}}"\'\n')),(0,a.mdx)("h3",{id:"get-pdf-properties-as-a-json-object"},"Get PDF Properties as a JSON Object"),(0,a.mdx)("p",null,"The sample below fetches the properties of an input PDF, as a JSON object."),(0,a.mdx)(l,{slots:"heading, code",repeat:"4",languages:"Java, .NET, Node JS, Rest API",mdxType:"CodeBlock"}),(0,a.mdx)("h4",{id:"java-1"},"Java"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples\n// Run the sample:\n// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.pdfproperties.PDFPropertiesAsJSONObject\n\n  public class PDFPropertiesAsJSONObject {\n\n    // Initialize the logger.\n    private static final Logger LOGGER = LoggerFactory.getLogger(PDFPropertiesAsJSONObject.class);\n\n    public static void main(String[] args) {\n\n      try {\n\n        // Initial setup, create credentials instance.\n        Credentials credentials = Credentials.serviceAccountCredentialsBuilder()\n            .fromFile("pdfservices-api-credentials.json")\n            .build();\n\n        //Create an ExecutionContext using credentials and create a new operation instance.\n        ExecutionContext executionContext = ExecutionContext.create(credentials);\n        PDFPropertiesOperation pdfPropertiesOperation = PDFPropertiesOperation.createNew();\n\n        // Provide an input FileRef for the operation\n        FileRef source = FileRef.createFromLocalFile("src/main/resources/pdfPropertiesInput.pdf");\n        pdfPropertiesOperation.setInputFile(source);\n\n        // Build PDF Properties options to include page level properties and set them into the operation\n        PDFPropertiesOptions pdfPropertiesOptions = PDFPropertiesOptions.PDFPropertiesOptionsBuilder()\n              .includePageLevelProperties(true)\n              .build();\n        pdfPropertiesOperation.setOptions(pdfPropertiesOptions);\n\n        // Execute the operation and return JSON Object\n        JSONObject result = pdfPropertiesOperation.execute(executionContext);\n        LOGGER.info("The resultant PDF Properties are: {}", result);\n\n      } catch (ServiceApiException | IOException | SdkException | ServiceUsageException ex) {\n        LOGGER.error("Exception encountered while executing operation", ex);\n      }\n    }\n  }  \n')),(0,a.mdx)("h4",{id:"net-1"},".NET"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_net_samples\n// Run the sample:\n// cd PDFPropertiesAsJSONObject/\n// dotnet run PDFPropertiesAsJSONObject.csproj\n\nnamespace PDFPropertiesAsJSONObject\n{\n    class Program\n    {\n        private static readonly ILog log = LogManager.GetLogger(typeof(Program));\n        static void Main()\n    {\n        //Configure the logging\n        ConfigureLogging();\n        try\n        {\n            // Initial setup, create credentials instance.\n            Credentials credentials = Credentials.ServiceAccountCredentialsBuilder()\n            .FromFile(Directory.GetCurrentDirectory() + "/pdfservices-api-credentials.json")\n            .Build();\n\n            //Create an ExecutionContext using credentials and create a new operation instance.\n            ExecutionContext executionContext = ExecutionContext.Create(credentials);\n            PDFPropertiesOperation pdfPropertiesOperation = PDFPropertiesOperation.CreateNew();\n\n            // Provide an input FileRef for the operation\n            FileRef source = FileRef.CreateFromLocalFile(@"pdfPropertiesInput.pdf");\n            pdfPropertiesOperation.SetInput(source);\n\n            // Build PDF Properties options to include page level properties and set them into the operation\n            PDFPropertiesOptions pdfPropertiesOptions = PDFPropertiesOptions.PDFPropertiesOptionsBuilder()\n            .IncludePageLevelProperties(true)\n            .Build();\n            pdfPropertiesOperation.SetOptions(pdfPropertiesOptions);\n\n            // Execute the operation and return JSON Object\n            JObject result = pdfPropertiesOperation.Execute(executionContext);\n            Console.WriteLine("The resultant PDF Properties are: " + result.ToString());\n\n        }\n        catch (ServiceUsageException ex)\n        {\n            log.Error("Exception encountered while executing operation", ex);\n        }\n        // Catch more errors here. . .\n    }\n\n        static void ConfigureLogging()\n    {\n        ILoggerRepository logRepository = LogManager.GetRepository(Assembly.GetEntryAssembly());\n        XmlConfigurator.Configure(logRepository, new FileInfo("log4net.config"));\n    }\n    }\n}\n')),(0,a.mdx)("h4",{id:"node-js-1"},"Node JS"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample\n// Run the sample:\n// node src/exportpdf/pdf-properties-as-json.js\n\nconst PDFServicesSdk = require('@adobe/pdfservices-node-sdk');\n\ntry {\n    // Initial setup, create credentials instance.\n    const credentials =  PDFServicesSdk.Credentials\n        .serviceAccountCredentialsBuilder()\n        .fromFile(\"pdfservices-api-credentials.json\")\n        .build();\n\n    //Create an ExecutionContext using credentials and create a new operation instance.\n    const executionContext = PDFServicesSdk.ExecutionContext.create(credentials),\n        pdfPropertiesOperation = PDFServicesSdk.PDFProperties.Operation.createNew();\n\n    // Set operation input from a source file.\n    const input = PDFServicesSdk.FileRef.createFromLocalFile('resources/pdfPropertiesInput.pdf');\n    pdfPropertiesOperation.setInput(input);\n\n    // Provide any custom configuration options for the operation.\n    const options = new PDFServicesSdk.PDFProperties.options.PDFPropertiesOptions.Builder()\n        .includePageLevelProperties(true)\n        .build();\n    pdfPropertiesOperation.setOptions(options);\n\n    // Execute the operation and log the JSON Object.\n    pdfPropertiesOperation.execute(executionContext)\n        .then(result => console.log(\"The resultant json object is : \" + JSON.stringify(result)))\n        .catch(err => {\n            if(err instanceof PDFServicesSdk.Error.ServiceApiError\n                || err instanceof PDFServicesSdk.Error.ServiceUsageError) {\n                console.log('Exception encountered while executing operation', err);\n            } else {\n                console.log('Exception encountered while executing operation', err);\n            }\n        });\n} catch (err) {\n    console.log('Exception encountered while executing operation', err);\n}\n")),(0,a.mdx)("h4",{id:"rest-api-1"},"Rest API"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Please refer our Rest API docs for more information\n// https://documentcloud.adobe.com/document-services/index.html#post-pdfProperties\n\ncurl --location --request POST \'https://cpf-ue1.adobe.io/ops/:create?respondWith=%7B%22reltype%22%3A%20%22http%3A%2F%2Fns.adobe.com%2Frel%2Fprimary%22%7D\' \\\n--header \'Authorization: Bearer {{Placeholder for token}}\' \\\n--header \'Accept: application/json, text/plain, */*\' \\\n--header \'x-api-key: {{Placeholder for client_id}}\' \\\n--header \'Prefer: respond-async,wait=0\' \\\n--form \'contentAnalyzerRequests="{\n  \\"cpf:inputs\\": {\n    \\"params\\": {\n      \\"cpf:inline\\": {\n        \\"pageLevel\\": true\n      }\n    },\n    \\"documentIn\\": {\n      \\"cpf:location\\": \\"InputFile0\\",\n      \\"dc:format\\": \\"application/pdf\\"\n    }\n  },\n  \\"cpf:engine\\": {\n    \\"repo:assetId\\": \\"urn:aaid:cpf:Service-fd9b06fe2f164df7975254581d6ab00e\\"\n  },\n  \\"cpf:outputs\\": {\n    \\"metadata\\": {\n      \\"dc:format\\": \\"application/json\\",\n      \\"cpf:location\\": \\"jsonoutput\\"\n    }\n  }\n}"\' \\\n--form \'InputFile0=@"{{Placeholder for input file (absolute path)}}"\'\n')))}f.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-2-2-0-pdf-services-api-howtos-pdf-properties-md-8530af89a806253012a3.js.map